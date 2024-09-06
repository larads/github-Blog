import { ArrowSquareOut, GithubLogo, Buildings, Users } from 'phosphor-react';

export function UserCard() {
    return (
        <div className="max-w-4xl w-full bg-base-profile py-8 pl-10 pr-8 absolute bottom-0 
      translate-y-1/2 rounded-xl shadow-lg">

            <div className="flex gap-4 items-center">
                <img src="https://github.com/larads.png" alt="" className="w-36 h-36 rounded-full" />

                <div className="flex flex-col">
                    <div className="flex items-center justify-between w-full">
                        <div className='flex flex-col'>
                            <h1 className="text-base-title text-2xl leading-tight font-bold">
                                Mariana da Silva Lara
                            </h1>
                        </div>
                        <a
                            href={'http://github.com/larads'}
                            className='flex gap-2 text-blue cursor-pointer hover:underline'
                            target='_blank'
                        >
                            <span className="uppercase text-xs leading-relaxed font-bold">GitHub</span>
                            <ArrowSquareOut className='w-4 h-4' />
                        </a>
                    </div>

                    <span className='text-base-text leading-relaxed mt-2'>
                        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.                    </span>

                    <div className='mt-6 flex items-center gap-6'>
                        <div className='flex items-center gap-2'>
                            <GithubLogo className='w-5 h-5 text-base-label' />
                            <p className='text-base-subtitle leading-relaxed'>larads</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Buildings className='w-5 h-5 text-base-label' />
                            <p className='text-base-subtitle leading-relaxed'>Dev</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Users className='w-5 h-5 text-base-label' />
                            <p className='text-base-subtitle leading-relaxed'>52 seguidores</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
