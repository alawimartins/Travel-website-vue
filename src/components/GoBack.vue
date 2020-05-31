<template>
    <div>
        <button @click="goBack">go back</button>
    </div>
</template>

<script>
export default {
    methods : {
        goBack() {
            return this.$router.go(-1)
        }
    }
}
</script>