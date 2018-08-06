<script>
export default {
  data () {
    return {
      baseCssClass: () => {
        return ['sco_component',
          { 'sco_component--collapsed': this.complete && !this.error },
          { 'sco_component-haserror': this.error },
          { 'sco_loaded': this.loaded }
        ]
      },
      complete: false,
      error: null,
      loaded: false
    }
  }
}
</script>
