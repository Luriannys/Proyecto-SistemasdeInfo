import style from "./newCategory.module.css"
import { useState, useEffect } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { query, getDocs } from 'firebase/firestore';
import Header2 from "../../components/Header2/Header2"
import CustomInput from "../../components/form/form";
import email_icon from '../../assets/email.svg';
import ig_icon from '../../assets/ig.svg';
import phone_icon from '../../assets/phone.svg';
import hashtag_icon from '../../assets/hashtag.svg';
import person_icon from '../../assets/person.svg';
import { db } from "/src/controller/services/firebase.js";



export default function NewCategory() {

    const [categories, setCategory] = useState([]);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [instagram, setInstagram] = useState('');
    const [tlf, setTlf] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    


    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(db, "Categorías"));
            const querySnapshot = await getDocs(q);
            const nombres = [];
            querySnapshot.forEach((doc) => {
                nombres.push(doc.data().nombre);
            });
            setCategory(nombres);
        };

        fetchData();
    }, []);


    // Aquí funciona el select
    const Select = () => {
        const [selectedCategory, setSelectedCategory] = useState('');

        const handleChange = (e) => {
            setSelectedCategory(e.target.value);
        };

        return (
            <select value={selectedCategory} onChange={handleChange} className='select' >
                {categories.map((category) => (
                    <option key={category}>{category}</option>
                ))}
            </select>
        );
    };

    // Modelito para el firestore
    const createCategory = async (e) => {
        e.preventDefault();
        try {

            await addDoc(collection(db, 'Agrupaciones'), {
                nombre: nombre,
                category: selectedCategory,
                email: email,
                instagram: instagram,
                description: description,
                images: images,
                tlf: tlf,
            });
        } catch (error) {
            alert("Error en la carga" + error);
        }
    };

    return (

        <div >

            <Header2 />
            <div className={style.form}>
                <h2>Crear categoría</h2>
                <form onSubmit={createCategory}>
                    <CustomInput
                        label={"Nombre"}
                        preffixIcon={<img src={person_icon} alt="icon" />}
                        type={"text"}
                        required={true}
                        onChange={(e) => setNombre(e.target.value)}>
                    </CustomInput>
                    <CustomInput
                        label={"Email"}
                        preffixIcon={<img src={email_icon}
                            alt="icon" />}
                        type={"email"}
                        placeholder={"mail@correo.unimet.edu.ve"}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}></CustomInput>
                    <CustomInput
                        label={"Instagram (opcional)"}
                        preffixIcon={<img src={ig_icon}
                            alt="icon" />}
                        type={"text"}
                        onChange={(e) => setInstagram(e.target.value)}
                        required={false}
                    ></CustomInput>
                    <CustomInput
                        label={"Teléfono"}
                        preffixIcon={<img src={phone_icon}
                            alt="icon" />}
                        type={"tel"}
                        onChange={(e) => setTlf(e.target.value)}
                        required={true}
                    ></CustomInput>
                    <CustomInput
                        label={"Descripción"}
                        preffixIcon={<img src={hashtag_icon}
                            alt="icon" />}
                        type={"text"}
                        onChange={(e) => setDescription(e.target.value)}
                        required={true}
                    ></CustomInput>
                    <CustomInput
                        name="images[]"
                        label={"Imágenes (opcional)"}
                        type={"file"}
                        accept="image/png, .jpeg, .jpg, image/gif"
                        required={false}
                        multiple
                        onChange={(e) => setImages(e.target.value)}
                    ></CustomInput>



                    {/* Implementación de select */}
                    <div className="input"
                        id="categories"
                        onChange={(e) => setSelectedCategory(e.target.value)}>
                        <Select />
                    </div>

                    <button type="submit" className={style.create}>Crear categoría</button>
                </form>
            </div>
        </div>



    );


}