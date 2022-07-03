console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java 10 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Iterator<T>"
 , "c2" : "org.apache.kafka.common.utils.AbstractIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.AbstractIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "T"
 , "c2" : "next()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "remove()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "T"
 , "c2" : "peek()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "T"
 , "c2" : "allDone()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "T"
 , "c2" : "makeNext()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Boolean"
 , "c2" : "maybeComputeNext()"
 , "c3" : "3"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java.svg" }

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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00008"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java.html#8"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00008] The class AbstractIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.common.utils.AbstractIterator.hasNext@POLYN168162 the MagicNumber/String  'Iterator is in failed state' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.common.utils.AbstractIterator.hasNext@POLYN168162 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.common.utils.AbstractIterator.hasNext@POLYN168162 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.common.utils.AbstractIterator.next@POLYN168582 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.utils.AbstractIterator.next@POLYN168582 the MagicNumber/String  'Expected item but none found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.utils.AbstractIterator.remove@POLYN168974 the MagicNumber/String  'Removal not supported' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.common.utils.AbstractIterator.allDone@POLYN169289 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.utils.AbstractIterator.maybeComputeNext@POLYN169488 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AbstractIterator.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.utils.AbstractIterator.maybeComputeNext@POLYN169488 the MagicNumber/String  true should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
