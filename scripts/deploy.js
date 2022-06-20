async function main() {
   const Mapping = await ethers.getContractFactory("Mapping_mmcs");

   // Start deployment, returning a promise that resolves to a contract object
   const Map_Sample = await Mapping.deploy();   
   console.log("Contract deployed to address:", Map_Sample.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
