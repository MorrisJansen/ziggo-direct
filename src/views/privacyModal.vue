<template>
    <div v-if="isVisible" class="modal" @click.self="$emit('close')">
        <div class="modal-content" @click.stop>
            <span class="close" @click="$emit('close')">&times;</span>
            <iframe :src="url" width="100%" height="100%"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    watch: {
        isVisible(newVal) {
            if (newVal) {
                document.body.style.overflow = 'hidden'; 
            } else {
                document.body.style.overflow = 'auto';
            }
        },
    },
}
</script>

<style scoped>
* {
    font-family: "DM Sans";
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99999;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 90%; 
    height: 70vh; 
    max-height: 90vh; 
    overflow-y: hidden;
    overflow-x: hidden; 
}

.close {
    cursor: pointer;
    float: right;
}

.modal-content {
    padding-bottom: 2vw!important;
}

.close[data-v-625a2dbb] {
    cursor: pointer;
    float: right;
    width: 50px;
    color: black;
    scale: 2;
}

</style>
