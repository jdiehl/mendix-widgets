import { type NPSPreviewProps } from '../typings/NPSProps'

type Properties = PropertyGroup[]

interface PropertyGroup {
  caption: string
  propertyGroups?: PropertyGroup[]
  properties?: Property[]
}

interface Property {
  key: string
  caption: string
  description?: string
  objectHeaders?: string[] // used for customizing object grids
  objects?: ObjectProperties[]
  properties?: Properties[]
}

interface Problem {
  property?: string // key of the property, at which the problem exists
  severity?: 'error' | 'warning' | 'deprecation' // default = "error"
  message: string // description of the problem
  studioMessage?: string // studio-specific message, defaults to message
  url?: string // link with more information about the problem
  studioUrl?: string // studio-specific link
}

interface ObjectProperties {
  properties: PropertyGroup[]
  captions?: string[] // used for customizing object grids
}

export function getProperties(_values: NPSPreviewProps, defaultProperties: Properties): Properties {
  // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
  /* Example
    if (values.myProperty === "custom") {
        delete defaultProperties.properties.myOtherProperty;
    }
    */
  return defaultProperties
}

export function check(_values: NPSPreviewProps): Problem[] {
  const errors: Problem[] = []
  // Add errors to the above array to throw errors in Studio and Studio Pro.
  /* Example
    if (values.myProperty !== "custom") {
        errors.push({
            property: `myProperty`,
            message: `The value of 'myProperty' is different of 'custom'.`,
            url: "https://github.com/myrepo/mywidget"
        });
    }
    */
  return errors
}
