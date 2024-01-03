import { BaseFilterable } from "../../dal"

export type AuthUserDTO = {
  id: string
  email: string
  provider_id: string
  user_metadata: Record<string, unknown>
  app_metadata: Record<string, unknown>
}

export type CreateAuthUserDTO = {
  email?: string
  provider_id: string
  password_hash?: string
  user_metadata?: Record<string, unknown>
  app_metadata?: Record<string, unknown>
}

export type UpdateAuthUserDTO = {
  id: string
  email?: string
  password_hash?: string
  user_metadata?: Record<string, unknown>
  app_metadata?: Record<string, unknown>
}

export interface FilterableAuthUserProps
  extends BaseFilterable<FilterableAuthUserProps> {
  id?: string[]
  provider?: string[] | string
  email?: string[] | string
}
