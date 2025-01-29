import { Link, Outlet } from "react-router-dom";
const About=()=>{
    return(
        <>
          <h1> About us</h1>          
          On the Insert tab, the galleries include items that are designed to coordinate with the overall look of your document. You can use these galleries to insert tables, headers, footers, lists, cover pages, and other document building blocks. When you create pictures, charts, or diagrams, they also coordinate with your current document look.
You can easily change the formatting of  <br />selected text in the
<p></p>

<table width="100%" height="200">
    <tr>
        <th width="20%">
            <Link to="aboutcomp"> About Company  </Link> 
            <br /> <br />
            <Link to="aboutprod"> About Product  </Link> 
            <br/> <br />
            <Link to="aboutservice"> About Services  </Link> 
</th>
        <td> 
           <Outlet/>
        </td>
    </tr>
</table>


  












 document text by choosing a look for the selected text from the Quick Styles gallery on the Home tab. You can also format text directly by using the other controls on the Home tab. Most controls offer a choice of using the look from the current theme or using a format that you specify directly.
To change the overall look of your document, choose new <br/> Theme elements on the Page Layout tab. To change the looks available in the Quick Style gallery, use the Change Current Quick Style Set command. Both the Themes gallery and the Quick Styles gallery provide reset commands so that you can always restore the look of your document to the original contained in your current template.


        </>
    )
}

export default About;