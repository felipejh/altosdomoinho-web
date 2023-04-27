export interface ListResident {
  id: string
  name: string
  apt: number
  tower: string
  phone_number: string | undefined
  obs: string
  vehicle_model: string | undefined
  vehicle_license_plate: string | undefined
  created_at: string
  updated_at: string
}

export type ShowResident = ListResident
