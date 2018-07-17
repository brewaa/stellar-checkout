import fontawesome from '@fortawesome/fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

fontawesome.library.add(
  faQuestionCircle,
  faSpinner
)

export {
  FontAwesomeIcon
}
