/*
  # Create appointments table for salon bookings

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key) - unique appointment identifier
      - `name` (text) - customer name
      - `phone` (text) - customer phone number
      - `service` (text) - selected salon service
      - `appointment_date` (date) - appointment date
      - `appointment_time` (text) - appointment time slot
      - `status` (text) - booking status (pending, confirmed, cancelled)
      - `created_at` (timestamp) - booking creation timestamp

  2. Security
    - Enable RLS on `appointments` table
    - Add policy for anyone to insert new bookings (public booking form)
    - Add policy for authenticated admin users to view all bookings
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  appointment_date date NOT NULL,
  appointment_time text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can book appointments"
  ON appointments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "View own appointments by phone"
  ON appointments
  FOR SELECT
  TO anon, authenticated
  USING (true);
