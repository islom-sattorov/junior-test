import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useRef, useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 22,
    textAlign: "center",
    border: "1px solid white",
    // position: "fixed",
    // top: "117px",
    // width: "400px"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 22,
    border: "1px solid black",
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 10,
  },
}));

type Post = {
  id: number | string;
  title: string;
  category: string;
  subtitle: string;
  salary: number;
  experience: number | string;
};

function createData(
  title: string,
  id: string | number,
  subtitle: string,
  category: string,
  salary: number,
  experience: number | string
): Post {
  return { title, id, subtitle, category, salary, experience };
}

export default function CustomizedTables() {
  const [posts, setPosts] = useState<Post[]>(() => []);
  const [fetching, setFetching] = useState(() => true);
  const [totalCount, setTotalCount] = useState<any>(() => 0);
  const pageRef = useRef(1);

  const rows = posts.map((post) => {
    return createData(
      post.title,
      post.id,
      post.subtitle,
      post.category,
      post.salary,
      post.experience
    );
  });

  const scrollHandler = (): void => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
        100 &&
      totalCount === posts.length
    ) {
      setFetching(true);
    }
  };

  // useEffect(() =>{
  //     axios.get(`http://localhost:3001/posts?_limit=10&_page=${pageRef.current}`)
  //     .then(response =>{
  //         setPosts([...posts, ...response.data])
  //         pageRef.current += 1
  //         setTotalCount(response.headers[`x-total-count`])
  //     })
  //     .catch(err => {
  //         console.error(err)
  //     })
  //     .finally(() => {
  //         setFetching(false)
  //     })
  // },[fetching])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Название</StyledTableCell>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">Категория</StyledTableCell>
            <StyledTableCell align="right">Требования</StyledTableCell>
            <StyledTableCell align="right">Опыт</StyledTableCell>
            <StyledTableCell align="right">Зарплата</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={nanoid()}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.subtitle}</StyledTableCell>
              <StyledTableCell align="right">{row.experience}</StyledTableCell>
              <StyledTableCell align="right">{row.salary}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
