import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { router } from "@inertiajs/react";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function funAction(key){
    return key == 0 ? '/goal' :
    key == 1 ? '/alternative' :
    key == 2 ? '/kriteria' : ''
}

export default function CardAddForm(){
    
    const [categories, setCategories] = useState({
        Tujuan:[{
            title: 'Tujuan',
            name: 'name'
        }],
        Alternatif:[{
            title: 'Alternatif',
            name: 'name'
        },
        {
            title: 'Kode Alternatif',
            name: 'code'
        }],
        Kriteria:[{
            title: 'Kriteria',
            name: 'name'
        },
        {
            title: 'Kode Kriteria',
            name: 'code'
        }]
    });

    const [form, setForm] = useState([]);

    const handleOnChange = (event) => {
        event.preventDefault()

        const target_name = event.target.name
        const target_value = event.target.value


        setForm(prev => ({
            ...prev,
            [target_name]: target_value
        }))

        
    }
    
    const handleSubmit = (event, route) => {
        event.preventDefault()
        router.post(route, form);
    }
    
    return(
        <>
        <div className="flex flex-wrap mt-4 h-screen">
            <div className="w-full mb-12 px-4 ">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="block sm:flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1 mt-4">
                                <h3 className="font-extrabold text-xl text-black uppercase">
                                    Tambahkan Data 
                                </h3>
                            </div>
                            
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto p-2 sm:px-8 sm:py-4">
                        <Tab.Group>
                            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                                {Object.keys(categories).map((category)=>(
                                    <Tab
                                    key={category}
                                    className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 ',
                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ',
                                        selected
                                        ? 'bg-white text-blue-700 shadow'
                                        : 'text-blueGray-500 hover:bg-white/[0.12] hover:text-white'
                                        )
                                    }
                                    >
                                    {category}
                                  </Tab>
                                ))
                                }
                            </Tab.List>
                            
                            <Tab.Panels className='mt-2'>
                                {Object.values(categories).map((values, idx)=>(
                                    <Tab.Panel 
                                    key={idx}
                                    className={classNames(
                                      'rounded-xl bg-white p-3',
                                      'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                    )}>
                                         <form onSubmit={event => handleSubmit(event, funAction(idx))}>
                                            {values.map((field, index) => (
                                                <div className="mt-4" key={index}>
                                                    <label htmlFor={field.name} className="text-blueGray-700 font-semibold mr-2 "> {field.title} : </label>
                                                    <input onChange={handleOnChange} type="text" placeholder={`Masukkan ${field.title}`} className="input mt-2 input-bordered input-warning w-full bg-gray-200 text-gray-500  " id={field.name} name={field.name}/>
                                                </div>
                                                
                                            ))}
                                            
                                            <div className="w-full flex justify-center">
                                                <button className="btn bg-orange-400 hover:bg-warning text-white border border-warning mt-4 w-1/6">Submit</button>
                                            </div>
                                        </form>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}