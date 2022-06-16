console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java 5 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00010"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class ClusterResourceListeners contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html#19"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00019] For method maybeAdd arguments Object  candidate"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method maybeAddAll arguments List&lt;? &gt;  candidateList"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method onUpdate arguments ClusterResource  cluster"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html#26"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00026] Public method maybeAddAll is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
