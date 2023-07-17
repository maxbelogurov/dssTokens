<template>
  <div class="modal fade" id="modalAddToken" tabindex="-1" aria-labelledby="modalAddTokenLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalAddTokenLabel">Add token</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <input type="text" class="form-control" id="tokenId" placeholder="Token id">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" id="tokenCompany" placeholder="Company name">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" id="tokenCompanyManager" placeholder="Company manager">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" id="tokenUser" placeholder="User">
          </div>
          <div class="mb-3 d-flex justify-content-between gap-2">
            <input type="text" class="form-control" id="tokenDateStart" placeholder="Date start">
            <input type="text" class="form-control" id="tokenDateEnd" placeholder="Date end">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" id="tokenDescription" placeholder="Description">
          </div>
          <div class="form-check form-switch mb-3">
            <input class="form-check-input" type="checkbox" role="switch" id="tokenFNS" checked>
            <label class="form-check-label" for="tokenActive">Published FNS</label>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="tokenActive" checked>
            <label class="form-check-label" for="tokenActive">Active</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalAddToken"
}
</script>

<style scoped>

</style>