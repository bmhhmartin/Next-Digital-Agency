export async function generateMetadata(){
    return{
      title: "Services",
      keywords: "",
      description: ""
    }
  }

const Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;