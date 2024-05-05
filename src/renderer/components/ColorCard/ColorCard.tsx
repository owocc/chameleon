import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

type ColorCardProps = {
  className?: string
  layoutId?: string
  onClick?: () => void
}
export function ColorCard(props: ColorCardProps): JSX.Element {
  const { className, layoutId, onClick } = props
  const cardClasses = clsx(
    'h-36 rounded-xl flex flex-col overflow-hidden cursor-pointer  w-full',
    className && className
  )
  return (
    <motion.div
      className={cardClasses}
      whileDrag={{ scale: 1.1 }}
      dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
      dragSnapToOrigin
      drag
      layoutId={layoutId}
      onClick={onClick}
    >
      <div className="bg-blue-500 w-full flex-1"></div>
      <div className="flex h-12">
        <div className="flex-1 bg-blue-300"></div>
        <div className="flex-1 bg-blue-400"></div>
        <div className="flex-1 bg-blue-500"></div>
      </div>
    </motion.div>
  )
}

export function ColorCardGroup(): JSX.Element {
  return (
    <div className="w-full pb-nav grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
      <Demo />
    </div>
  )
}

function Demo(): JSX.Element {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const items = [
    {
      id: '121313',
      subtitle: 'hello',
      title: 'sds'
    },
    {
      id: 'djaskdjk',
      subtitle: 'hello',
      title: 'sds'
    },
    {
      id: 'dad',
      subtitle: 'hello',
      title: 'sds'
    },
    {
      id: 'dasidjka',
      subtitle: 'hello',
      title: 'sds'
    },
    {
      id: 'dasdasd',
      subtitle: 'hello',
      title: 'sds'
    }
  ]

  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 0.8,
      delay: 0.2
    }
  }

  return (
    <>
      {items.map((item) => (
        <ColorCard layoutId={item.id} key={item.id} onClick={() => setSelectedId(item.id)} />
      ))}

      <AnimatePresence>
        {selectedId && (
          <div className="absolute h-full z-50 w-full flex justify-center left-0 top-0 items-center overflow-hidden p-2">
            <motion.div
              className="absolute -z-[1] left-0 top-0 h-full w-full bg-white "
              variants={container}
              initial="hidden"
              animate="show"
              onClick={() => setSelectedId(null)}
              exit={{ opacity: 0 }}
            />
            <ColorCard layoutId={selectedId} className="w-full md:w-96 h-52" />
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
