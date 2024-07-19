export class HomeController {
    Index = async (req, res) => {
        await res.render("Pagina");
    };
}
