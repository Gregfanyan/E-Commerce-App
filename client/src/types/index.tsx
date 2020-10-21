export * from "./Product";

export type CountryProps = {
  population: number
  name: string
  region: string
  language: string
}

export type TableRowProps = {
  flagUrl: string
  countryName: string
  languages: Object[]
  region: string
  population: number
}

export type SearchBarProps = {
  handleChange: React.ReactEventHandler<HTMLInputElement>
  search: string
}
