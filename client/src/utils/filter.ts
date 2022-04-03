const filters = {
  toUpperCamelCase(value: string): string {
    if (value.length === 0) {
      return value
    } else if (value.length === 1) {
      return value.charAt(0).toUpperCase()
    }
    return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
  }
}

export default filters
