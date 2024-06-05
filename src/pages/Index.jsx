import { useState } from "react";
import { Container, Text, VStack, HStack, Button, Table, Thead, Tbody, Tr, Th, Td, Input, FormControl, FormLabel, IconButton, useToast } from "@chakra-ui/react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const Index = () => {
  const [vendors, setVendors] = useState([]);
  const [form, setForm] = useState({
    vendorNumber: "",
    vendorName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    paymentTerms: "",
    currency: "",
    taxNumber: "",
    bankCountry: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    setVendors([...vendors, form]);
    setForm({
      vendorNumber: "",
      vendorName: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      paymentTerms: "",
      currency: "",
      taxNumber: "",
      bankCountry: "",
    });
    toast({
      title: "Vendor added.",
      description: "Vendor has been added successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleDelete = (index) => {
    const newVendors = vendors.filter((_, i) => i !== index);
    setVendors(newVendors);
    toast({
      title: "Vendor deleted.",
      description: "Vendor has been deleted successfully.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Text fontSize="4xl" fontWeight="bold">
          Vendor Management
        </Text>
        <VStack spacing={4} w="100%">
          <FormControl id="vendorNumber" isRequired>
            <FormLabel>Vendor Number</FormLabel>
            <Input name="vendorNumber" value={form.vendorNumber} onChange={handleChange} maxLength={20} />
          </FormControl>
          <FormControl id="vendorName" isRequired>
            <FormLabel>Vendor Name</FormLabel>
            <Input name="vendorName" value={form.vendorName} onChange={handleChange} maxLength={255} />
          </FormControl>
          <FormControl id="address" isRequired>
            <FormLabel>Address</FormLabel>
            <Input name="address" value={form.address} onChange={handleChange} maxLength={255} />
          </FormControl>
          <FormControl id="city" isRequired>
            <FormLabel>City</FormLabel>
            <Input name="city" value={form.city} onChange={handleChange} maxLength={50} />
          </FormControl>
          <FormControl id="state" isRequired>
            <FormLabel>State</FormLabel>
            <Input name="state" value={form.state} onChange={handleChange} maxLength={50} />
          </FormControl>
          <FormControl id="country" isRequired>
            <FormLabel>Country</FormLabel>
            <Input name="country" value={form.country} onChange={handleChange} maxLength={50} />
          </FormControl>
          <FormControl id="postalCode" isRequired>
            <FormLabel>Postal Code</FormLabel>
            <Input name="postalCode" value={form.postalCode} onChange={handleChange} maxLength={10} />
          </FormControl>
          <FormControl id="contactName" isRequired>
            <FormLabel>Contact Name</FormLabel>
            <Input name="contactName" value={form.contactName} onChange={handleChange} maxLength={100} />
          </FormControl>
          <FormControl id="contactEmail" isRequired>
            <FormLabel>Contact Email</FormLabel>
            <Input type="email" name="contactEmail" value={form.contactEmail} onChange={handleChange} maxLength={100} />
          </FormControl>
          <FormControl id="contactPhone" isRequired>
            <FormLabel>Contact Phone</FormLabel>
            <Input name="contactPhone" value={form.contactPhone} onChange={handleChange} maxLength={20} />
          </FormControl>
          <FormControl id="paymentTerms" isRequired>
            <FormLabel>Payment Terms</FormLabel>
            <Input name="paymentTerms" value={form.paymentTerms} onChange={handleChange} maxLength={50} />
          </FormControl>
          <FormControl id="currency" isRequired>
            <FormLabel>Currency</FormLabel>
            <Input name="currency" value={form.currency} onChange={handleChange} maxLength={10} />
          </FormControl>
          <FormControl id="taxNumber" isRequired>
            <FormLabel>Tax Number</FormLabel>
            <Input name="taxNumber" value={form.taxNumber} onChange={handleChange} maxLength={50} />
          </FormControl>
          <FormControl id="bankCountry" isRequired>
            <FormLabel>Bank Country</FormLabel>
            <Input name="bankCountry" value={form.bankCountry} onChange={handleChange} maxLength={50} />
          </FormControl>
          <Button colorScheme="teal" onClick={handleSubmit}>
            Add Vendor
          </Button>
        </VStack>
        <Table variant="simple" w="100%">
          <Thead>
            <Tr>
              <Th>Vendor Number</Th>
              <Th>Vendor Name</Th>
              <Th>Contact Name</Th>
              <Th>Contact Email</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {vendors.map((vendor, index) => (
              <Tr key={index}>
                <Td>{vendor.vendorNumber}</Td>
                <Td>{vendor.vendorName}</Td>
                <Td>{vendor.contactName}</Td>
                <Td>{vendor.contactEmail}</Td>
                <Td>
                  <HStack spacing={2}>
                    <IconButton aria-label="View" icon={<FaEye />} />
                    <IconButton aria-label="Edit" icon={<FaEdit />} />
                    <IconButton aria-label="Delete" icon={<FaTrash />} onClick={() => handleDelete(index)} />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;
