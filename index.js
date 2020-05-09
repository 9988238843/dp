function myFunction4_proceed()
{
  var i,j,n,m,seq1=[],seq2=[];
  var x=document.getElementById("myForm").elements.namedItem("sequence1").value;
  var y=document.getElementById("myForm").elements.namedItem("sequence2").value;

  m=x.length;
  n=y.length;
  i=lcs(x,y);
  j=i.length;

  document.getElementById("mypara").innerHTML = "Longest Common Subsequence is  :  " + i;

  document.getElementById("mypara1").innerHTML = "TIME COMPLEXITY :  O(M * N) <br> SPACE COMPLEXITY : O(M * N)<br> M : Length of First String<br> N : Length of Second String";
}

function lcs(x,y){
	var s,i,j,m,n,
		lcs=[],row=[],c=[],
		left,diag,latch;

	if(m<n){s=x;x=y;y=s;}
	m = x.length;
	n = y.length;

	for(j=0;j<n;row[j++]=0);
	for(i=0;i<m;i++){
		c[i] = row = row.slice();
		for(diag=0,j=0;j<n;j++,diag=latch){
			latch=row[j];
			if(x[i] == y[j]){row[j] = diag+1;}
			else{
				left = row[j-1]||0;
				if(left>row[j]){row[j] = left;}
			}
		}
	}
	i--,j--;

	while(i>-1&&j>-1){
		switch(c[i][j]){
			default: j--;
				lcs.unshift(x[i]);
			case (i&&c[i-1][j]): i--;
				continue;
			case (j&&c[i][j-1]): j--;
		}
	}
	return lcs.join('  ,  ');
}

function reset()
{
  document.getElementById("myForm").reset();
  document.querySelector("#mypara").innerHTML="";
  document.querySelector("#mypara1").innerHTML="";
}
