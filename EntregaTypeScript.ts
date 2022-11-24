class datos {
    nombre: string = "";
    edad: number = 0;
    genero: string = "";
    amigos: Array<any> = [];
}

interface Inombre extends datos {
    getAll(): void;
    getById(id: number): void;
    getByName(name: string): void;
    create(nombre: string, edad: number, genero: string): void;
    update(name: string, newName: string, newEdad: number, newGenero: string): void;
    delete(name: string): void;
}

class Repository implements Inombre {
    getAll(): void {
        let valores = ""
        this.amigos.forEach(element => {
            valores += JSON.stringify(element) + " ";
        });
        alert(valores)
    }
    getById(id: number): void {
        let registro = this.amigos[id];
        alert(JSON.stringify(registro));
    }
    getByName(name: string): void {
        let registro = this.amigos.find(element => element.nombre == name);
        alert(JSON.stringify(registro));
    }
    create(nombre: string, edad: number, genero: string): void {
        this.amigos.push({
            nombre: nombre,
            edad: edad,
            genero: genero
        })
    }
    update(name: string, newName: string, newEdad: number, newGenero: string): void {
        let amigo = this.amigos.find(element => element.nombre == name)
        amigo.nombre = newName
        amigo.edad = newEdad
        amigo.genero = newGenero
    }
    delete(name: string): void {
        this.amigos = this.amigos.filter(registro => registro.nombre !== name)
    }
    nombre: string = "Carlos Felipe";
    edad: number = 27;
    genero: string = "Masculino";
    amigos: any[] = [
        { nombre: 'Ana', edad: 21, genero: 'Femenino' },
        { nombre: 'Jose', edad: 23, genero: 'Masculino' },
        { nombre: 'Cristina', edad: 37, genero: 'Femenino' },
        { nombre: 'Andrés', edad: 29, genero: 'Masculino' },
        { nombre: 'Dayana', edad: 33, genero: 'Femenino' }
    ];
}

let repository = new Repository();

let option
do {
    option = Number(prompt("Menú principal, Seleccione una opción:" +
        "\n1. Obtener todos los registros" +
        "\n2. Obtener registros por ID" +
        "\n3. Obtener registros por nombre" +
        "\n4. Crear registro" +
        "\n5. Actualizar registro" +
        "\n6. Eliminar registro" +
        "\n7. Salir"));

    switch (option) {
        case 1:
            repository.getAll();
            break;
        case 2:
            try {
                repository.getById(Number(prompt("Ingresa el ID")));
            } catch (error) {
                alert("Error: " + error);
            }
            break;
        case 3:
            try {
                repository.getByName("" + prompt("Ingresa el Nombre"));
            } catch (error) {
                alert("Error: " + error);
            }
            break;
        case 4:
            try {
                let name = prompt("Ingresa el Nombre")
                let age = Number(prompt("Ingresa la edad"))
                let gender = prompt("Ingresa el Género")
                repository.create("" + name, age, "" + gender);
            } catch (error) {
                alert("Error: " + error);
            }

            break;
        case 5:
            try {
                let name = prompt("Ingresa el Nombre")
                let newName = prompt("Ingresa el nuevo Nombre")
                let newAge = Number(prompt("Ingresa la nueva edad"))
                let newGender = prompt("Ingresa el nuevo Género")
                repository.update(""+name, ""+newName, newAge, ""+newGender);
            } catch (error) {
                alert("Error: " + error);
            }
            break;
        case 6:
            try {
                let name = prompt("Ingresa el Nombre para eliminar un registro")
                repository.delete(""+name);
            } catch (error) {
                alert("Error: " + error);
            }
            break;
        default:
            break;
    }

} while (option != 7);