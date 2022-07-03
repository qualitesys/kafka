console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FlattenedIterator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/FlattenedIterator.java 1 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FlattenedIterator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractIterator<I>"
 , "c2" : "org.apache.kafka.common.utils.FlattenedIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.FlattenedIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "FlattenedIterator"
 , "c2" : "FlattenedIterator(Iterator<O>;Function<O,Iterator<I>>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "I"
 , "c2" : "makeNext()"
 , "c3" : "4"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FlattenedIterator.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FlattenedIterator.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FlattenedIterator.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.common.utils.FlattenedIterator.makeNext@POLYN165784 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
