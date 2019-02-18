<template>
  <div class="characters">
    This file will list all the characters.
    <div v-for="character in characters" :key="character.name">
        <p>
            <span><b>{{ character.name }}</b></span><br />
            <span>{{ character.color }}</span><br/>
        </p>
        </div>
    </div>
</template>

<script>
import CharactersService from '@/services/CharactersService'
export default {
  name: 'Characters',
  data () {
    return {
      characters: []
    }
  },
  mounted () {
    this.getCharacters()
  },
  methods: {
    async getCharacters () {
      const response = await CharactersService.fetchCharacters()
      this.characters = response.data.characters
      console.log(response.data)
    }
  }
}
</script>
