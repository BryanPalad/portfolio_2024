import { techStacks } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Skills = () => {
  return (
    <div className='py-20' id="skills">
        <h1 className='heading'>
            My
            <span className='text-purple'> technical stacks</span>
        </h1>

        {/* <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {techStacks.map((card) => (
                <Button 
                    key={card.id}
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                >
                    <div className='flex flex-col px-2 py-4 items-center'>
                            <h1 className='text-start text-xl md:text-2xl font-bold mt-2'>{card.title}</h1>
                            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-8 mt-6 px-2 py-2 lg:px-4'>
                                {card.stacks.map((item, index) => (
                                    <div key={index} className='flex gap-2 items-center'>
                                        <img key={index} src={item.img} className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]'/>
                                        <p className='text-start text-white-100 font-semibold'>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                    </div>
                </Button>
            ))}
        </div> */}

        
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {techStacks.map((card) => (
                <Button 
                    key={card.id}
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                >
                    <div className='flex flex-col px-2 py-4 items-center'>
                            <h1 className='text-start text-xl md:text-2xl font-bold mt-2'>{card.title}</h1>
                            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-8 mt-6 px-2 py-2 lg:px-4'>
                                {card.stacks.map((item, index) => (
                                    <div key={index} className='flex gap-2 items-center'>
                                        <img key={index} src={item.img} className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]'/>
                                        <p className='text-start text-white-100 font-semibold'>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                    </div>
                </Button>
            ))}
        </div>

    </div>
  )
}

export default Skills