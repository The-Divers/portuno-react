import { Filter } from 'react-feather';


const Header = () => {
    return (
        <div className="header container my-3">
            <div className="row">
                <div className="andares col-6 col-sm-3 float-right">
                    <select className="select form-select">
                        <option value="" key="" selected>Térreo</option>
                        <option value="" key="">1º andar</option>
                        <option value="" key="poition">2º andar</option>
                    </select>
                </div>

                <div className='col-1 col-sm-6'>
                    {/* separador */}
                </div>
                
                <div className="filtros col-5 col-sm-3">
                    <button className="btn">
                        <Filter size={30} />
                        <span>Filtros</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;