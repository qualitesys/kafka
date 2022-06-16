console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java 8 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.xml" 
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
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00005"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#5"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00005] The class SynchronizedCache contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#13"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00013] Lock statement on synchronized method get"
}} 
,
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#13"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00013] For method get arguments K  key"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#18"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00018] Lock statement on synchronized method put"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#18"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00018] For method put arguments K  key|V  value"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#23"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00023] Lock statement on synchronized method remove"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method remove arguments K  key"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#28"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00028] Lock statement on synchronized method size"
}} 
]
};
console.log('leListeStr 99 main end');
