import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import MasterRoutes from "./routes/MasterRoutes";
import { useAuth } from "./context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import db from "./firebase/firebaseConfig";
import { useDocByCondition } from "./lib/firebaseLibs";

function App() {
  // ******************** RECURSOS GENERALES ******************** //
  const userAuth = useAuth().usuario;
  // como
  const [usuario, setUsuario] = useState(userAuth);
  const [userMaster, setUserMaster] = useState();
  // ************************** DAME SOLO UN DOC POR ID**************************
  const useDocById = (collectionName, setState, idUsuario) => {
    useEffect(() => {
      if (usuario) {
        const unsub = onSnapshot(doc(db, collectionName, idUsuario), (doc) => {
          setState({ ...doc.data(), id: doc.id });
        });
        // Devolver una función de limpieza para detener la escucha cuando el componente se desmonte
        return () => unsub();
      }
    }, [collectionName, setState, idUsuario]);
  };
  let idUsuario = usuario?.uid ? usuario.uid : "00";
  useDocById("usuarios", setUserMaster, idUsuario);

  const [dbArticulos, setDBArticulos] = useState([]);
  const [grupoCluster, setGrupoCluster] = useState([]);

  useDocByCondition("articulos", setDBArticulos);
  useDocByCondition("grupoDeArticulos", setGrupoCluster);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log(idUsuario);
    // console.log(userMaster);
  }, [userMaster]);

  useEffect(() => {
    setUsuario(userAuth);
  }, [userAuth]);

  return (
    <>
      <MasterRoutes userMaster={userMaster} dbArticulos={dbArticulos} />
    </>
  );
}

export default App;
