import { JSX } from 'react'

import { ColorCardGroup } from '../components/common/ColorCard/ColorCard'
function ViewRoot(): JSX.Element {
  return (
    <div className="h-full p-4 overflow-y-auto relative overflow-x-hidden w-full ">
      <ColorCardGroup />
    </div>
  )
}

export default ViewRoot
