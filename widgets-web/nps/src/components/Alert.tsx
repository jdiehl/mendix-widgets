import { type FunctionComponent, createElement } from 'react'

export const Alert: FunctionComponent = ({ children }) => {
  if (!children) return null
  return <div className="spacing-outer-top alert alert-danger mx-validation-message">{children}</div>
}
