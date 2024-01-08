//------------- Contorl dublicate map array object DATA

// uniqueIdsVh = empty array varibel
// getNameVechiles = 'main this data'
// element = same data is coming from getNameVechiles data
// VhisDuplicate in funcion varibel , this check data id with includes
// ----
// then we need condition if for check ids
// if id is true , pushing data id to uniqueIdsVh and return true
// then id is not there , we need return false

// -------
// finaly we are maping uniqueVHichels for show data ,
// no if we are add data with click , if we have same data , dont print us

const uniqueIdsVh = [];

const uniqueVHichels = getNameVechiles.filter((element) => {
  const VhisDuplicate = uniqueIdsVh.includes(element.id);

  if (!VhisDuplicate) {
    uniqueIdsVh.push(element.id);

    return true;
  }

  return false;
});
