let x=[];
     
n=prompt("enter size of first array");
for( i=0;i<n;i++)
{
    x[i]=prompt();

}
document.write(x);
let y=[];

m=prompt("enter size of second array");
for( i=0;i<m;i++)
{
    y[i]=prompt();

}
document.write("<br>"+y);
let ans=[];
l=0;
k=0;
a=0;
while(l!=n && k!=m)
{
    if(x[l]<y[k])
    {
        ans[a]=x[l];
        l++;
        a++;
    }else{
       ans[a]=y[k];
        k++;
        a++;
    }

}
while(k!=m)
{
   ans[a]=y[k];
        k++;
        a++;
}
while(l!=n)
{
   ans[a]=x[l];
        l++;
        a++;
}
document.write("<br>"+ans);