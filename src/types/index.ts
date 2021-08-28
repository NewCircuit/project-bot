export type AfkStatus = {
  id?: string
  user: string,
  start: Date,
  end: Date,
  refresh?: number
  active: boolean
}
