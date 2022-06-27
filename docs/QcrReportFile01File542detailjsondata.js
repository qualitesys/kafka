console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java 13 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.quota.ClientQuotaAlteration"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.quota.ClientQuotaAlteration" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ClientQuotaAlteration"
 , "c2" : "ClientQuotaAlteration(ClientQuotaEntity;Collection<Op>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ClientQuotaEntity"
 , "c2" : "entity()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<Op>"
 , "c2" : "ops()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00009"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class ClientQuotaAlteration contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class Op contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00034] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.common.quota.ClientQuotaAlteration.Op.equals@POLYN167317 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.common.quota.ClientQuotaAlteration.Op.equals@POLYN167317 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.common.quota.ClientQuotaAlteration.Op.equals@POLYN167317 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.quota.ClientQuotaAlteration.Op.toString@POLYN168092 the MagicNumber/String  'ClientQuotaAlteration.Op(key=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.quota.ClientQuotaAlteration.Op.toString@POLYN168092 the MagicNumber/String  ', value=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.quota.ClientQuotaAlteration.Op.toString@POLYN168092 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.common.quota.ClientQuotaAlteration.toString@POLYN169009 the MagicNumber/String  'ClientQuotaAlteration(entity=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.common.quota.ClientQuotaAlteration.toString@POLYN169009 the MagicNumber/String  ', ops=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaAlteration.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.common.quota.ClientQuotaAlteration.toString@POLYN169009 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
