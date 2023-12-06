
import React, { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Modal from 'react-modal'
const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Itinerários', href: '#', current: true },

]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DashboardScreen() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [destinationName, setDestinationName] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    const [touristSpots, setTouristSpots] = useState([]);
    const [touristSpotInput, setTouristSpotInput] = useState('');
    const [destinations, setDestinations] = useState([]);
    const [showDestinations, setShowDestinations] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleAddTouristSpot = () => {
        if (touristSpotInput.trim() !== '') {
            setTouristSpots([...touristSpots, touristSpotInput]);
            setTouristSpotInput('');
        }
    };

    const handleRemoveTouristSpot = (indexToRemove) => {
        setTouristSpots((prevSpots) =>
            prevSpots.filter((_, index) => index !== indexToRemove)
        );
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
      
        if (file) {
          // Você pode fazer algo com o arquivo aqui, como enviar para o servidor ou exibir na interface.
          console.log('Arquivo de imagem:', file);
        }
      };

      const saveDestination = (destination) => {
        setDestinations([...destinations, destination]);
        closeModal();
        setShowDestinations(true);
      };
    
      const editDestination = (index) => {
        // Implementar a lógica para editar o destino com base no índice
        // Você pode abrir um novo modal com os detalhes do destino para edição
        console.log('Editar destino:', destinations[index]);
      };
    
      const deleteDestination = (index) => {
        // Implementar a lógica para excluir o destino com base no índice
        setDestinations(destinations.filter((_, i) => i !== index));
      };

    return (
        <>
            {/*
            This example requires updating your template:
    
            ```
            <html class="h-full bg-gray-100">
            <body class="h-full">
            ```
          */}
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-8"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                                alt="Your Company"
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <button
                                                type="button"
                                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="absolute -inset-1.5" />
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({ active }) => (
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-gray-700 pb-3 pt-4">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Wayfarer Pal</h1>
                    </div>
                </header>
                <main className={`bg-opacity-50 filter ${isModalOpen ? 'blur-lg' : ''}`}>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        <button
                            onClick={openModal}
                            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
                        >
                            Open Modal
                        </button>

                        {/* Modal */}
                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={() => {
                                closeModal();
                                setShowDestinations(false);
                            }}
                            contentLabel="Example Modal"
                            className="modal" // Adiciona classe para o estilo do modal
                            overlayClassName="overlay" // Adiciona classe para o estilo do overlay
                        >
                            <div className="p-4 max-w-md mx-auto bg-white rounded-md shadow-md">
                                <h2 className="text-2xl font-bold mb-4">Adicionar Destino</h2>

                                <div className="mb-4">
                                    <label htmlFor="destinationName" className="block text-sm font-medium text-gray-700">
                                        Nome do Destino:
                                    </label>
                                    <input
                                        type="text"
                                        id="destinationName"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md color-black-700"
                                        value={destinationName}
                                        onChange={(e) => setDestinationName(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                        Local:
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                        Imagem:
                                    </label>
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="touristSpot" className="block text-sm font-medium text-gray-700">
                                        Ponto Turístico:
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            id="touristSpot"
                                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                            value={touristSpotInput}

                                            onChange={(e) => setTouristSpotInput(e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            className="ml-2 bg-blue-500 text-white px-3 py-2 rounded-md"
                                            onClick={handleAddTouristSpot}
                                        >
                                            Adicionar
                                        </button>
                                    </div>
                                </div>

                                <ul className="list-disc pl-5 mb-4 border rounded-md p-2 ">
                                    {touristSpots.map((spot, index) => (
                                        <li key={index} className="mb-1  text-black">
                                            <span>{spot}</span>
                                            <button
                                                className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                                                onClick={() => handleRemoveTouristSpot(index)}
                                            >
                                                X
                                            </button>

                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={closeModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                                >
                                    Fechar Modal
                                </button>
                                <button
                                    className="bg-blue-500 text-black px-4 py-2 rounded-md"
                                    onClick={() => saveDestination({ destinationName, location, touristSpots, image })}
                                >
                                    Salvar Destino
                                </button>
                            </div>
                        </Modal>
                    {/* Lista de destinos */}
                    {showDestinations && (
                        <div className="mt-4 p-4 bg-gray-100 rounded">
                            <h2 className="text-black font-bold mb-2">Destinos Salvos</h2>
                            <ul>
                                {destinations.map((destination, index) => (
                                    <li key={index} className="text-black mb-1">
                                        {destination.destinationName} - {destination.location}
                                        {/* Mostrar outros detalhes do destino conforme necessário */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )} 
                    </div>
                </main>
            </div>
        </>
    )
}