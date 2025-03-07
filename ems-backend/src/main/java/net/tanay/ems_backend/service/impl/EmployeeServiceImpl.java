package net.tanay.ems_backend.service.impl;
import java.util.List;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.tanay.ems_backend.dto.EmployeeDto;
import net.tanay.ems_backend.entity.Employee;
import net.tanay.ems_backend.exception.ResourceNotFoundException;
import net.tanay.ems_backend.mapper.EmployeeMapper;
import net.tanay.ems_backend.repository.EmployeeRepository;
import net.tanay.ems_backend.service.EmployeeService;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmloyee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);


        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
        .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with the given id." + employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees =  employeeRepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee)).toList();
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {

        Employee employee = employeeRepository.findById(employeeId)
        .orElseThrow(() -> 
        new ResourceNotFoundException("Employee does not exist with the given id." + employeeId));
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        Employee updatedEmployeeObj = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
        .orElseThrow(() -> 
        new ResourceNotFoundException("Employee does not exist with the given id." + employeeId));
        employeeRepository.deleteById(employeeId);
        System.out.println("Employee deleted is: " + employee);
    }

}
