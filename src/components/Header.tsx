import { IVideo } from "./Videos";
export interface HeaderProps {
  searchVedios: IVideo[]; // Define a more specific type for searchVedios if possible
  setSearchVedios: React.Dispatch<React.SetStateAction<IVideo[]>>;
}
function Header({ searchVedios, setSearchVedios }: HeaderProps) {
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = (e.target as HTMLFormElement).value;
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${search}&key=AIzaSyDB_ddJA1F_388dV303UxlkOlIOCv4xsS0`)
    .then(res => res.json())
    .then(data => setSearchVedios(data.items))
  }

console.log(searchVedios)

  return (
    <header className="py-[34px] ">
        <nav className="max-w-[95%] mx-auto ">
            <div className="flex justify-between">
                
                <div className="flex gap-7 items-center">
                        <img src="/bar-menu.png" alt="bar menu" />
                        <img src="/public/youtubeLogo.png" alt="you tube logo" />
                </div>

                <form action="" onSubmit={handleSubmit}>
                        <input className="py-4 px-[23px] bg-[#EBEBEB] rounded-[50px] w-[830px]" type="search" placeholder="Search" />
                </form>

                <div className="flex gap-[50px] items-center">
                    <img src="/public/camera.png" alt="camera" />
                    <img src="/public/combined.png" alt="combonet" />
                    <img src="/public/notification.png" alt="notification" />
                    <img className="w-[40px] h-[40px] rounded-[50%]" src="/public/userpic.png" alt="user" />
                </div>

            </div>
            

        </nav>
    </header>
  )
}

export default Header