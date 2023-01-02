console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java 14 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.quota.ClientQuotaFilter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.quota.ClientQuotaFilter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#38"
 , "c1" : "ClientQuotaFilter"
 , "c2" : "ClientQuotaFilter(Collection<ClientQuotaFilterComponent>;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#49"
 , "c1" : "ClientQuotaFilter"
 , "c2" : "contains(Collection<ClientQuotaFilterComponent>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#59"
 , "c1" : "ClientQuotaFilter"
 , "c2" : "containsOnly(Collection<ClientQuotaFilterComponent>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#66"
 , "c1" : "ClientQuotaFilter"
 , "c2" : "all()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00073"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#73"
 , "c1" : "Collection<ClientQuotaFilterComponent>"
 , "c2" : "components()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#80"
 , "c1" : "boolean"
 , "c2" : "strict()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#85"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00093"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#93"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#98"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method contains arguments Collection&lt;ClientQuotaFilterComponent &gt;  components"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.common.quota.ClientQuotaFilter.contains@POLYN152890 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method containsOnly arguments Collection&lt;ClientQuotaFilterComponent &gt;  components"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.common.quota.ClientQuotaFilter.containsOnly@POLYN153250 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.quota.ClientQuotaFilter.all@POLYN153502 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00087] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.quota.ClientQuotaFilter.equals@POLYN154003 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.quota.ClientQuotaFilter.equals@POLYN154003 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.quota.ClientQuotaFilter.equals@POLYN154003 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.quota.ClientQuotaFilter.toString@POLYN154778 the MagicNumber/String  'ClientQuotaFilter(components=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.quota.ClientQuotaFilter.toString@POLYN154778 the MagicNumber/String  ', strict=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.quota.ClientQuotaFilter.toString@POLYN154778 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#66"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00066] Public method all is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
