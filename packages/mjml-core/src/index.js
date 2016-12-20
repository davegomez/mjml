import MJMLRenderer from './MJMLRenderer'
import mjmlValidator, { formatValidationError, rulesCollection, registerMJRule } from 'mjml-validator'
import elements, { registerMJElement } from './MJMLElementsCollection'
import MJMLHeadElements, { registerMJHeadElement } from './MJMLHead'
import * as helpers from './helpers'

export MJMLElement from './decorators/MJMLElement'
export { MJMLRenderer, registerMJElement, elements, helpers, registerMJHeadElement, MJMLHeadElements, formatValidationError, registerMJRule, rulesCollection }
export const documentParser = (content, attributes) => {
  const parseMjml = require('./parsers/document').default

  return parseMjml(content, attributes)
}

export const version = () => '__MJML_VERSION__'
export const MJMLValidator = mjmlValidator
export const mjml2html = (mjml, options = {}) => new MJMLRenderer(mjml, options).render()
