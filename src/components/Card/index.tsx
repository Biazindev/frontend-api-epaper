import filter from '../../assets/filter.png'
import searchIcon from '../../assets/search.png'
import help from '../../assets/help.png'
import * as S from './styles'

const Card = () => (
    <>
        <S.Container>
            <S.Documents>
                <div>
                    <span>Documentos</span>
                    <p>Crie, gerencie e visualize os documentos</p>
                </div>
                <S.Filter>
                    <S.InputContainer>
                        <input type="text" placeholder="Buscar documentos" />
                        <img src={searchIcon} alt="search" />
                    </S.InputContainer>
                    <button type="submit">
                        <img src={filter} alt="filter" />
                        Filtrar
                    </button>
                </S.Filter>
            </S.Documents>
        </S.Container>
        <S.DocType>
            <S.DocContainer>
                <S.Adjuste>
                    <div>
                        <label htmlFor="origin">Origem do documento</label>
                        <img src={help} alt="help" />
                    </div>
                    <select name="origin" id="origin">
                        <option value="digitalizado">Digitalizado</option>
                        <option value="nuvem">Nuvem</option>
                    </select>
                </S.Adjuste>
                <S.Adjuste>
                    <div>
                        <label htmlFor="origin">Tipo documental</label>
                        <img src={help} alt="help" />
                    </div>
                    <select name="origin" id="origin">
                        <option value="digitalizado">Nota fiscal serviço</option>
                        <option value="nuvem">Default</option>
                    </select>
                </S.Adjuste>
            </S.DocContainer>
            <button>+ Novo documento</button>
        </S.DocType>
    </>
)

export default Card
