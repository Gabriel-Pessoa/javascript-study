<template>
  <div>
    <v-container fluid>
      <v-form>
        <v-file-input
          multiple
          chips
          v-model="files"
          label="Selecione as Legendas"
          prepend-icon="mdi-message-text"
          outlined
          append-outer-icon="mdi-send"
          @click:append-outer="processSubtitles"
        />
      </v-form>
      <div class="pills">
        <Pill
          v-for="word in groupedWords"
          :key="word.name"
          :name="word.name"
          :amount="word.amount"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
import Pill from "./Pill";

export default {
        components: { Pill },
        data: function() {
            return {
            files: [],
                groupedWords: []
        }
    },
    methods: {
        processSubtitles() {

            const paths = this.files.map(f => f.path)
            
            ipcRenderer.send("process-subtitles", paths)
            ipcRenderer.on("process-subtitles", (event, resp) => {
                this.groupedWords = resp
            })
        }
    }
}
</script>

<style>

    .pills {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

</style>