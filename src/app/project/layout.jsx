export async function generateMetadata(){
    return{
      title: "Project",
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