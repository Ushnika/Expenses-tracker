import React, {useState} from 'react';
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

const category = [
  {
    name:"Food",
    id: new Date('2020-08-01').getTime(),
  },
  {
    name:"Transportation",
    id: new Date('2020-08-02').getTime(),
  },
  {
    name:"Entertainment",
    id: new Date('2020-08-03').getTime(),
  },
  {
    name:"Shopping",
    id: new Date('2020-08-04').getTime(),
  },
  {
    name:"Clothing",
    id: new Date('2020-08-05').getTime(),
  },
  {
    name:"Telephone",
    id: new Date('2020-08-06').getTime(),
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
  
export default function Project(){
    const [value, setValue] = useState(0);
    const[inputText,setInputText] =useState("");
    const[editText,setEditText]=useState("");
    const [categories,setCategories] =useState(category); 
    const[categoryOnEdit,setCategoryOnEdit] =useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function handleTextChange(event){
      // console.log(event.target.value)
      setInputText(event.target.value)
     
    }
    function handleText(event){
      // console.log(event.target.value)
      setEditText(event.target.value)
     
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

      
    }

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
        setCategoryOnEdit(null);
        setInputText("");
    }

    }
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
                Item One
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
              onClick={handleSubmit}>
                
                Add New
              </Button>
              </form>
            
            <Grid container spacing={3}>
              {
                categories.map((list) => (
                  <Grid item xs={3} style={{marginTop:"20px"}} key={list.id}>
                  <Paper elevation={3} style={{height:"3.5rem"}}>                          
                    <Typography variant="body1" gutterBottom style={{padding:"15px"}}>
                        <text style={{lineHeight:"27px",paddingLeft:"3px"}}> {list.name}</text>
                    <DeleteIcon style={{float:"right",color:"grey"}}
                    onClick={() => handleDelete(list.id)}
                    />
                    <EditIcon style={{float:"right",marginRight:"20px",color:"grey"}}
                    onClick={() => handleEdit(list)}
                    />
                    
                   
                    </Typography>                                                 
                  </Paper>
                  
                  {categoryOnEdit && categoryOnEdit.id === list.id && 
                    <Paper>
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
                  onClick={handleUpdate}>Update</Button>
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