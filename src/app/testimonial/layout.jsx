export async function generateMetadata(){
    return{
      title: "Testimonial",
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