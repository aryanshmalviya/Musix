import getSongs from "@/Actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItems";

import PageContent from "./components/PageContents";

export const revalidate = 0 ;

export default async function Home(){
    const songs =await getSongs();

    return (
        <div className="
        bg-gradient-to-r from-black from-5% via-gray-800 via-40% to-emerald-800 to-70%
            h-full
            w-full
            overflow-hidden
            overflow-y-auto
        ">
            <Header>
                <div className="mb-2">
                    <h1 className="
                        text-white
                        text-3xl
                        font-semibold
                    ">
                       <text className="font-bold">Welcome</text>
                    </h1>
                    <div className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        xl:grid-cols-3
                        2xl:grid-cols-4
                        gap-3
                        mt-4
                    ">
                        <ListItem
                            image="/images/liked.png"
                            name="Liked Songs"
                            href="liked"
                        />
                    </div>
                </div>
            </Header>
            <div className="mt-2 mb-7 px-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-2xl font-semibold">
                        Newest Songs
                    </h1>
                </div>
                <div>
                    <PageContent songs={songs}/>
                </div>
            </div>
        </div>
    )
}