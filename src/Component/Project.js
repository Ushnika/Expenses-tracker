import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete'; 
import EditIcon from '@material-ui/icons/Edit';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Container from '@material-ui/core/Container';
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const category = [
  {
    name:"Food",
    id: 1
  },
  {
    name:"Transportation",
    id: 2
  },
  {
    name:"Entertainment",
    id: 3
  },
  {
    name:"Shopping",
    id: 4
  },
  {
    name:"Clothing",
    id: 5
  },
  {
    name:"Telephone",
    id: 6
  },

]
const data = [
  {
    date:"05 Sep 2015",
    name:"Medicine",
    amount:"3057.21",
    id: new Date('2020-9-01').getTime(),
    categoryId: 5,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    date:"06 Oct 2018",
    name:"Bill",
    amount:"2058.32",
    id: new Date('2020-09-02').getTime(),
    categoryId: 3,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    date:"08 Aug 2019",
    name:"Games",
    amount:"4512",
    id: new Date('2020-09-03').getTime(),
    categoryId: 2,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    date:"28 Nov 2020",
    name:"Books",
    amount:"5216.21",
    id: new Date('2020-09-04').getTime(),
    categoryId: 1,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    date:"15 Dec 2015",
    name:"movie",
    amount:"5021.74",
    id: new Date('2020-09-05').getTime(),
    categoryId: 3,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },


]
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={2}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const Styles = makeStyles((theme) => ({
      heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '20%',
        flexShrink: 0,
      },
      heading1: {
          fontSize: theme.typography.pxToRem(15),
          flexBasis: '20%',
          flexShrink: 0,
        },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },
  }));
  const useStyles = makeStyles(Styles);

export default function Project(){
    const classes = useStyles();
    const accordionclasses = Styles();
    const [value, setValue] = useState(0);
    const[inputText,setInputText] =useState("");
    const[editText,setEditText]=useState("");
    const [categories,setCategories] =useState(category); 
    const[categoryOnEdit,setCategoryOnEdit] =useState(null);
    const [open, setOpen] = React.useState(false);
    // const [message, setMessage] = React.useState(false);
    const [details, setDetails] =useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const[dataList,setDataList]=useState(data);
    const[insertText,setInsertText]=useState("");
    const[insertName,setInsertName]=useState("");
    const[insertDate,setInsertDate]=useState("");
    const[insertAmount,setInsertAmount]=useState("");


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function handleTextChange(event){
      // console.log(event.target.value)
      setInputText(event.target.value);
     
    }
    function handleText(event){
      // console.log(event.target.value)
      setEditText(event.target.value);
     
    }
    function handleTextData(event){
      // console.log(event.target.value)
      setInsertText(event.target.value);
    }

    function handleAmount(event){
      setInsertAmount(event.target.value);

    }
    function handleName(event){
      setInsertName(event.target.value);

    }
    function handleDate(event){
      setInsertDate(event.target.value);

    }

    function handleSubmit(event){
      event.preventDefault();
      console.log("Added category-->",inputText)
      if(inputText <=0) return;
      var newCategory={
        name: inputText,
        id: new Date().getTime(),
      }
      console.log("new category added-->",newCategory);
      var expenseCategory =[...categories,newCategory]
      setCategories(expenseCategory)
      console.log("expenseCategrory-->",[...categories,newCategory]);
      setInputText("");
      setOpen(true)

      
    }

    function handleClick(){
      setDetails();
    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    function handleDelete(listID){
      console.log("setId-->",listID)
        const categoryAfterdel = categories.filter(
            (categories) => categories.id !== listID
            );
            console.log("categoryAfterdel",categoryAfterdel);
            setCategories(categoryAfterdel)
    }

    function handleEdit(list){
      setCategoryOnEdit(list);
      setEditText(list.name);

    }
    function handleUpdate(event){
      event.preventDefault();
      if(editText<=0) return;
      const categoryForUpdate= [...categories];
      console.log("Update-->",categoryForUpdate);
      const index = categories.findIndex((group) => group.id == categoryOnEdit.id);
      console.log("index---",index);
      if(index>=0){
        categoryForUpdate[index].name =editText;
        setCategories(categoryForUpdate);
        setOpen(true);
        setTimeout(()=>{
        setCategoryOnEdit(null);
        setInputText("")

        },6000)

    }}

    function handleClick(){
      setDetails(true);
    }

    function handleCancel(){
      setDetails(null);
    }
    function close(list){
      setCategoryOnEdit(null);

    }

    function handleAdd(event){
      event.preventDefault();
      if(insertText <=0) return;
      if(insertDate <=0) return;
      if(insertName <=0) return;
      if(insertAmount <=0) return;
      var newData={
        date: insertDate,
        name: insertName,
        amount: insertAmount,
        id: new Date().getTime(),
        description: insertText,
      }
      console.log("new data added-->",newData);
      var expenseData =[...dataList,newData]
      setDataList(expenseData)
      console.log("expData-->",[...dataList,newData]);
      setInsertText("");
      setInsertDate("");
      setInsertAmount("");
      setInsertName("");
    }

    function handleRemove(infoID){
      console.log("infoID-->",infoID)
      const dataAfterDel = dataList.filter(
        (dataList) => dataList.id !== infoID
        );
      console.log("dataAfterDel-->",dataAfterDel);
      setDataList(dataAfterDel);

    }

    const handleChangeAccordion = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  
    
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu" style={{marginLeft:"20px",marginRight:"15px"}}>
                    <LocalAtmIcon />
                </IconButton>
                <Typography variant="h6">
                    Expense Tracker
                </Typography>
                </Toolbar>
            </AppBar>
            <div>
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Overview" {...a11yProps(0)} />
                  <Tab label="Expense Categories"{...a11yProps(1)} />
              </Tabs>

            </div>            
            <TabPanel value={value} index={0}>
              <Container maxWidth="lg">
                <Typography variant="h5" gutterBottom style={{width:"48%"}}>View Expenses</Typography>
                  {!details &&
                    <Button 
                  variant="outlined" 
                  color="primary" 
                  onClick={handleClick}
                  style={{float:"right",width:"10%",marginTop:"-40px",marginRight:"20px"}}
                  >
                    Add
                  </Button>
                  }
                  {details ?
                    <Button 
                  variant="outlined" 
                  color="primary" 
                  onClick={handleCancel}
                  style={{float:"right",width:"10%",marginTop:"-40px",marginRight:"20px"}}
                  >
                    Cancel
                  </Button>:null
                    }
                  {details ?
                  <div>
                    <TextField
                        id="date"
                        label="Select Date"
                        variant="outlined"
                        type="date"
                        value={insertDate}
                        onChange={handleDate}
                        defaultValue="2017-05-24"
                        style={{marginTop:"20px",marginRight:"20px",width:"20%"}}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    <TextField 
                      id="outlined-basic" 
                      label="Amount" 
                      variant="outlined" 
                      value={insertAmount}
                      onChange={handleAmount}
                      style={{marginTop:"20px",marginRight:"20px",width:"20%"}}
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="Name" 
                      variant="outlined" 
                      value={insertName}
                      onChange={handleName}
                      style={{marginTop:"20px",marginRight:"20px",width:"20%"}}
                    />
                    <FormControl style={{marginTop:"20px",marginRight:"20px",width:"33%"}}>
                      <InputLabel id="outlined-basic" style={{marginLeft:"15px",marginTop:"-5px"}}>Category</InputLabel>
                      <Select 
                        id="outlined-basic" 
                        label="Category" 
                        variant="outlined" 
                      >
                        {category.map((option) => (
                          <MenuItem key={option.name} value={option.id}>
                            {option.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <br/>
                    <TextField 
                      id="outlined-basic" 
                      label="Description" 
                      variant="outlined" 
                      value={insertText}
                      onChange={handleTextData}
                      style={{marginTop:"20px",width:"98%"}}
                    />
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={handleAdd}
                      style={{marginTop:"20px",width:"10%"}}>
                       Save
                   </Button>
                  </div>:null
                  }
                  <Accordion>
                    <AccordionSummary style={{marginTop:"30px"}}>
                      <Typography className={accordionclasses.heading1} style={{color: 'purple', fontSize: '18px'}}>Date</Typography>
                      <Typography className={accordionclasses.heading} style={{color: 'purple', fontSize: '18px'}}>Name</Typography>
                      <Typography className={accordionclasses.heading} style={{color: 'purple', fontSize: '18px'}}>Category</Typography>
                      <Typography className={accordionclasses.heading} style={{color: 'purple', fontSize: '18px'}}>Amount</Typography>
                      <Typography className={accordionclasses.heading} style={{color: 'purple', fontSize: '18px'}}>Action</Typography>
                    </AccordionSummary>
                  </Accordion>
                  {
                    dataList.map((info) => (
                      <Accordion expanded={expanded === 'panel1'} onChange={handleChangeAccordion('panel1')} key={info.id}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography className={accordionclasses.heading1}>{info.date}</Typography>
                          <Typography className={accordionclasses.heading}>{info.name}</Typography>
                          <Typography className={accordionclasses.heading}>{info.categoryId}</Typography>
                          <Typography className={accordionclasses.heading}>{info.amount}</Typography>
                          <Edit style={{marginLeft:"20px"}}/> 
                          <Close onClick={() => handleRemove(info.id)} style={{marginLeft:"10px"}}/> 

                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            {info.description}
                          </Typography>
                        </AccordionDetails>
                    </Accordion>
                      ))
                  }
              </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <form >
                <TextField 
                  id="outlined-basic" 
                  label="Expense Categories" 
                  variant="outlined" 
                  value={inputText}
                  style={{width:"50%",marginTop:"25px",marginLeft:"20px"}}
                  onChange={handleTextChange}
                />
                <Button variant="contained" color="primary" style={{marginTop:"34px",marginLeft:"14px"}} 
                disabled={inputText.length <=0}
                onClick={handleSubmit}
                >
                  Add New
                </Button>
                <Snackbar
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open&&!categoryOnEdit}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Added successfully"
                    action={
                      <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </React.Fragment>
                    }
                />
              </form>
              <Grid container spacing={3}>
                {
                  categories.map((list) => (
                    <Grid item xs={3} style={{marginTop:"20px"}} key={list.id}>
                      <Paper elevation={3} style={{height:"3.5rem",marginLeft:"20px"}}>                          
                        <Typography variant="body1" gutterBottom style={{padding:"15px"}}>
                            <text style={{lineHeight:"27px",paddingLeft:"3px"}}> {list.name}</text>
                            <DeleteIcon style={{float:"right",color:"grey"}}
                            onClick={() => handleDelete(list.id)}
                            />
                            {!categoryOnEdit || categoryOnEdit.id != list.id ?
                            <EditIcon style={{float:"right",marginRight:"20px",color:"grey"}}
                            onClick={() => handleEdit(list)}
                            />:null
                            }
                            {categoryOnEdit && categoryOnEdit.id === list.id && 
                            <CancelOutlinedIcon style={{float:"right",marginRight:"20px",color:"grey"}}
                            onClick={() => close(list)}
                            />
                            }
                        </Typography>                                                 
                      </Paper>
                  
                  {categoryOnEdit && categoryOnEdit.id === list.id && 
                    <Paper style={{marginLeft:"20px"}}>
                      <TextField 
                          id="outlined-basic" 
                          label="Editing Expense Categories" 
                          variant="outlined" 
                          value={editText}
                          style={{marginTop:"18px",width:"90%",marginLeft:"13px",marginBottom:"8px"}}
                          onChange={handleText}
                        
                      />
                      <Button variant="contained" color="primary" style={{marginLeft:"13px",marginBottom:"8px"}}
                        disabled={editText.length <=0}
                        onClick={handleUpdate}>Update
                      </Button>
                      <Snackbar
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Updated successfully"
                        action={
                          <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                              <CloseIcon fontSize="small" />
                            </IconButton>
                          </React.Fragment>
                        }
                      />
                    </Paper>
                  }
               
              </Grid>  
                )
                )
              }
                   
                                                                     
            </Grid>
            
          </TabPanel>
            
         
    </div>
    )
}