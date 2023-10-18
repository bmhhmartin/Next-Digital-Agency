export async function generateMetadata(){
    return{
      title: "Team",
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