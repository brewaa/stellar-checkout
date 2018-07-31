import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'

// dom.watch()

library.add(
  faQuestionCircle,
  faSpinner
)

export default FontAwesomeIcon
