<template>
    <div class="input-container">

        <input :type="tipo" placeholder="" v-model="model" :class="validarCampos.class"
            :style="{ color: props.color, background: props.background, width: props.width, height: props.height }" />
        <label>{{ label }}</label>


    </div>
    <p class="error-msg">{{ validarCampos.message }} </p>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// cree una interface para el error, asi no tengo que repetir el mismo objeto
interface Error {
    message: string;
    class: string
    error: boolean
}

const model = defineModel<string>()
// valida el input dependiendo del tipo de input que se le pase
// si es un input de tipo text o password, valida la cantidad de caracteres
// si es un input de tipo email, valida que sea un email valido
// tambien  valida  si es una fecha valida y si es menor a la fecha actual

const validarCampos = computed((): Error => {
    if (model.value) {
        if (props.tipo === 'text' || props.tipo === 'password') {
            if (model.value.length < props.cant_caracteres && model.value.length > 0) {
                return {
                    message: `El campo debe tener al menos ${props.cant_caracteres} caracteres`,
                    class: 'error',
                    error: true
                }
            } else {
                return {
                    message: '',
                    class: 'success',
                    error: false
                };
            }
        }
        if (props.tipo === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(model.value)) {
                return {
                    message: 'El campo debe ser un email valido',
                    class: 'error',
                    error: true
                }
            } else {
                return {
                    message: '',
                    class: 'success',
                    error: false
                };
            }
        }
        if (props.tipo === 'date') {
            let fecha_value = new Date(model.value)
            let fecha_actual = new Date()
            if (fecha_value > fecha_actual) {
                return {
                    message: 'La fecha no puede ser mayor a la actual',
                    class: 'error',
                    error: true
                }
            }

            const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
            if (!dateRegex.test(model.value)) {
                return {
                    message: 'El campo debe ser una fecha valida',
                    class: 'error',
                    error: true
                }
            } else {
                return {
                    message: '',
                    class: 'success',
                    error: false
                };
            }
        }
    }
    return {
        message: '',
        class: '',
        error: false
    }
}
);

const props = defineProps({
    cant_caracteres: {
        type: Number,
        default: 3
    },
    label: {
        type: String,
        required: true
    },
    value: {
        type: String,
        default: ''
    },
    tipo: {
        type: String,
        default: 'text'
    },
    width: String,
    height: String,
    color: String,
    background: String,
});

</script>

<style scoped>
input {
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin: 5px;

}

.input-container {
    height: 60px;
    position: relative;
    margin-top: 15px;
}

label {
    position: absolute;
    top: 10px;
    left: 20px;
    color: #999;
    transition: all 0.3s ease;
}

input:focus+label,
input:not(:placeholder-shown)+label {
    top: -15px;
    left: 10px;
    font-size: 12px;
    color: #126d1b;
}

.error {
    border: 2px solid red;
}

.error-msg {

    color: red;
    height: 10px;
    line-height: 0px;
    font-size: 12px;
    margin: 0;
}

.success {
    border: 2px solid green;
}
</style>